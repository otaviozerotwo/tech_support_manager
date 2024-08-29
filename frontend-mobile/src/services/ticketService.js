import { BASE_URL } from '@env';

export const createTicket = async (ticketData) => {
  try {
    const response = await fetch(`${BASE_URL}/tickets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticketData),
    });

    if (!response.ok) {
      throw new Error('Failed to create ticket');
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error(error);

    return null;
  }
};

export const getTickets = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tickets`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch tickets');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    
    return null;
  }
};

export const getTicketById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/tickets/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch ticket');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    
    return null;
  }
};

export const updateTicket = async (id, ticketData) => {
  try {
    const response = await fetch(`${BASE_URL}/tickets/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticketData),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch ticket');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    
    return null;
  }
};

export const deleteTicket = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/tickets/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch ticket');
    }

    return { message: 'Ticket deleted successfully' };
  } catch (error) {
    console.error(error);

    return null;
  }
};