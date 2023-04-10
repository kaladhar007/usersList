import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueNo:1,
    imageUrl:
      'https://scontent.fhyd2-1.fna.fbcdn.net/v/t39.30808-6/278903124_4519063938195408_6525362700413565_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dYf4JOvWupQAX8SdHTm&_nc_ht=scontent.fhyd2-1.fna&oh=00_AfAXXf_moV5VRan2qXkt_OGRyRixHmCDmijEMPrqSUgrfA&oe=64395C9E',
    name: 'kaladhar',
    role: 'software developer',
  },
  {
    uniqueNo:2,
    imageUrl:
      'https://scontent.fhyd2-1.fna.fbcdn.net/v/t39.30808-6/278903124_4519063938195408_6525362700413565_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dYf4JOvWupQAX8SdHTm&_nc_ht=scontent.fhyd2-1.fna&oh=00_AfAXXf_moV5VRan2qXkt_OGRyRixHmCDmijEMPrqSUgrfA&oe=64395C9E',
    name: 'kaladhar',
    role: 'software developer',
  },
  {
    uniqueNo:3,
    imageUrl:
      'https://scontent.fhyd2-1.fna.fbcdn.net/v/t39.30808-6/278903124_4519063938195408_6525362700413565_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dYf4JOvWupQAX8SdHTm&_nc_ht=scontent.fhyd2-1.fna&oh=00_AfAXXf_moV5VRan2qXkt_OGRyRixHmCDmijEMPrqSUgrfA&oe=64395C9E',
    name: 'kaladhar',
    role: 'software developer',
  },
  {
    uniqueNo:4,
    imageUrl:
      'https://scontent.fhyd2-1.fna.fbcdn.net/v/t39.30808-6/278903124_4519063938195408_6525362700413565_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dYf4JOvWupQAX8SdHTm&_nc_ht=scontent.fhyd2-1.fna&oh=00_AfAXXf_moV5VRan2qXkt_OGRyRixHmCDmijEMPrqSUgrfA&oe=64395C9E',
    name: 'kaladhar',
    role: 'software developer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">UsersList</h1>
    <ul>
      {userDetailsList.map(each => (
        <UserProfile userDetails={each} key={uniqueKey}/>
      ))}
    </ul>
  </div>
)

export default App
