import type { NextPage } from 'next'
import {useCreateUserMutation} from "../generated/graphql";

const Home: NextPage = () => {

  const [createUser] = useCreateUserMutation()

  return (
    <div>
        <button onClick={() => createUser({variables: {input: {name: "Johnny"}}})}>Nutzer anlegen</button>
    </div>
  )
}

export default Home
