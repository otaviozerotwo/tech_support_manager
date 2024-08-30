import { BASE_URL } from '@env';

export const createContact = async (contactData) => {
  try {
    const response = await fetch(`${BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error('Failed to create contact');
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error(error);

    return null;
  }
};

export const getContacts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/contacts`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }

    const data = await response.json();

    // console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    
    return null;
  }
};

export const getContactByPhoneNumber = async (phoneNumber) => {
  try {
    const response = await fetch(`${BASE_URL}/contacts/${phoneNumber}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch contact');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    
    return null;
  }
};

export const updateContact = async (id, contactData) => {
  try {
    const response = await fetch(`${BASE_URL}/contacts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch contact');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    
    return null;
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/contacts/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch contact');
    }

    return { message: 'Contact deleted successfully' };
  } catch (error) {
    console.error(error);

    return null;
  }
};