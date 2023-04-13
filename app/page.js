import Test from "@/test";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

/* export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return res.json();
}; */

/* export const getOtherData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  return res.json();
};

export const getOtherData2 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  return res.json();
}; */

async function HomePage() {
  /*   const data = getData();
  const data2 = getOtherData();
  const data3 = getOtherData2();

  const [dataResult1, dataResult2, dataResult3] = await Promise.all([
    data,
    data2,
    data3,
  ]);

  console.log({ dataResult1, dataResult2, dataResult3 }); */

  /*   const data3 = await getData(); */
  /*   const data4 = await getOtherData(); */

  return (
    <div>
      {/* <h1>Data Fetching:{data3.title}</h1> */}
      {/*   <h2>Data2:{data4.title}</h2> */}
      <Test />
    </div>
  );
}
export default HomePage;
