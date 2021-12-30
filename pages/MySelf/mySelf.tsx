import { NextPage } from "next";
import Layout from "../layout/Layout";
import Kana from "./kana";
import Skill from "./skill";
import CareerLicense from "./careerLicense";



const MySelf: NextPage = () => {
  
  return (
    <Layout title="Kana's Portfolio| myself" className="myself">
      <Kana />
      <Skill />
      <CareerLicense />
    </Layout>
  )
}

export default MySelf