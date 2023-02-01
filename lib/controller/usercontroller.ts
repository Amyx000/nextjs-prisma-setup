import prisma from "../prisma";

type data = {
  name: string;
  email: string;
  img: string;
};

const createUser = async (data: data) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        img: data.img,
      },
    });
    return user;
  } catch (error) {
     throw new Error("failed")
  }
};

const getUsers = async ()=>{
    try {
        const users = await prisma.user.findMany()
        return users 
    } catch (error) {
        throw new Error("failed")
    }
}

module.exports={createUser, getUsers}
