const {PrismaClient} = require('@prisma/client');
const data = require('./db.json');
const prisma = new PrismaClient();

async function main(){
    await prisma.contact.deleteMany({});
    for (const contact of data.contacts){
        await prisma.contact.create({
            data: {
                id: contact.id,
                firstName: contact.firstName,
                lastName: contact.lastName,
                email: contact.email,
            },
        });
    }
}
main()
    .then(async () => {
        console.log('Data seeded successfully')
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });