import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function GET() {
  const result = await sql`SELECT * FROM revenue`;
  return new Response(JSON.stringify(result), { status: 200 });
}

// Ejemplo alternativo para pruebas:
// export async function GET() {
//   const result = await sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `;
//   return new Response(JSON.stringify(result), { status: 200 });
// }
