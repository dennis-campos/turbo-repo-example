import { getName } from "../actions/request";

export default async function Page(){
  const data = await getName();

return (
  <main>
    <div>
      <p>hi</p>
      {data.map((item: any) => (
        <div key={item.id}>
        <p>
          {item.name}
        </p>
        </div>
          
      ))}
    </div>
  </main>
)
}
