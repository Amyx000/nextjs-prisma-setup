import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import React from 'react'

type Data = {
    name: string;
    email: string;
    img: string;
}

type Props = {
    data: Data[]
}

function user({ data }: Props) {
    return (
        <div style={{ "width": "50%", "margin": "100px auto", "display": "grid","gridTemplateColumns":"auto 1fr", "gap": "20px", "alignItems": "center" }}>
            {data.map((item, index) => {
                return (
                    <React.Fragment key={index} >
                        <div>
                            <img style={{ "width": "50px", "borderRadius": "50%" }} src={item.img} alt="" />
                        </div>
                        <div>
                            <div>{item.name}</div>
                            <div>{item.email}</div>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>

    )
}

export default user

export const getServerSideProps = async () => {

    const res = await fetch("http://localhost:3000/api/users")
    const data: Props = await res.json()
    return { props: { data } }
}