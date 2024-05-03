import { ContactList } from '../general-types';
import prisma from './prisma';

export async function getContacts(): Promise<Array<ContactList>>{
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