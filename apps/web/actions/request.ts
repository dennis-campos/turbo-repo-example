'use server'

export async function getName() {
    const res = await fetch('http://localhost:3002', {
        method: "GET"
    })
    
    const data = await res.json();
    console.log(data);

    return data;
}