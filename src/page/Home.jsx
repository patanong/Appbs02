
import MyButton from '../MyButton'
import MainLayout from '../layousts/MainLayout'

const Home = () => {
  return (
    <MainLayout>
      <div className="mt-4 p-5 bg-success text-white rounded">
        <h1>Jumbotron Example</h1>
        <p>Lorem ipsum...</p>
      </div>
      <MyButton  text="test" color="success"/>
      <MyButton  text="danger" color="danger"/>
      <MyButton  text="wurning" color="primary"/>
    </MainLayout>

  )
}

export default Home
