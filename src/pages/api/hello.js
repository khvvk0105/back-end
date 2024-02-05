// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Dummydata } from "@/utils/dummyData";

const handler = (req, res) => {
  res.status(200).json(Dummydata);
};

export default handler;
