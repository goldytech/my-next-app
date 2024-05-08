import {Contact, ContactDto} from '../general-types';
import prisma from './prisma';

export async function getContacts(): Promise<Array<ContactDto>>{
  try {
   const contacts  = await prisma.contact.findMany(
    {
        select: {
            id: true,
            firstName: true,
            lastName: true,
        },
        orderBy: {
            firstName: 'asc',
        },
    }
   );
   return contacts.map((contact) => {
    return {
        ...contact
  }
})
} catch (error) {
    throw new Error(`Error getting contacts: ${error}`);
    
    }
}

export async function createContactRecord(contact: Contact){
    try {
        await prisma.contact.create({
            data: {
                firstName: contact.firstName,
                lastName: contact.lastName,
                email: contact.email,
            },
        });
    } catch (error) {
        throw new Error(`Error creating contact record: ${error}`);
    }
}

export async function deleteContactRecord(contactId: number){
    try {
        await prisma.contact.delete({
            where: {
                id: contactId,
            },
        });
    } catch (error) {
        throw new Error(`Error deleting contact record: ${error}`);
    }
}

export async function updateContactRecord(contact: Contact){
    try {
        await prisma.contact.update({
            where: {
                id: contact.id,
            },
            data: {
                firstName: contact.firstName,
                lastName: contact.lastName,
                email: contact.email,
            },
        });
    } catch (error) {
        throw new Error(`Error updating contact record: ${error}`);
    }
}