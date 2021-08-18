import Image from 'next/image'
import useSWR from 'swr'

const Profile = () => {
    const { data, error } = useSWR('https://api.github.com/users/shimaxu', fetch);
    console.log(data.body)
    return (
        <Image
          src="/images/profile.png" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      )
      
}
export default Profile