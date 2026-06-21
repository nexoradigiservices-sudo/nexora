export async function POST(req){
  try{
    const body = await req.json();
    console.log('newsletter sign up', body);
    return new Response(JSON.stringify({ status:'ok' }),{status:200});
  }catch(e){
    return new Response(JSON.stringify({ error:'bad request' }),{status:400});
  }
}
