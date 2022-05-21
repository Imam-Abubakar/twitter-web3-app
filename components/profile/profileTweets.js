import { useEffect, useContext, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}
/*
const tweets = [
  {
      displayName: 'Abubakar',
      userName: '0x8C895448gy48gh845g84fgg48hungd',
      avatar: 'https://pbs.twimg.com/profile_images/1523770549264125955/5sBDl1lV_400x400.jpg',
      text: 'gm',
      isProfileImageNft: false,
      timestamp: '2021-06-01T12:00:00.000Z',
  },
      {
      displayName: 'Abubakar',
      userName: '0x8C895448gy48gh845g84fgg48hungd',
      avatar: 'https://pbs.twimg.com/profile_images/1523770549264125955/5sBDl1lV_400x400.jpg',
      text: 'gm',
      isProfileImageNft: false,
      timestamp: '2020-06-01T12:00:00.000Z',
  },
  {
      displayName: 'Abubakar',
      userName: '0x8C895448gy48gh845g84fgg48hungd',
      avatar: 'https://pbs.twimg.com/profile_images/1523770549264125955/5sBDl1lV_400x400.jpg',
      text: 'gm',
      isProfileImageNft: false,
      timestamp: '2022-01-01T12:00:00.000Z',
  },
  {
      displayName: 'Abubakar',
      userName: '0x8C895448gy48gh845g84fgg48hungd',
      avatar: 'https://pbs.twimg.com/profile_images/1523770549264125955/5sBDl1lV_400x400.jpg',
      text: 'gm',
      isProfileImageNft: false,
      timestamp: '2020-06-01T12:00:00.000Z',
  },

]*/

const profileTweets = () => {
  const { currentUser } = useContext(TwitterContext)
  const [tweets, setTweets] = useState([
    {
      timestamp: '',
      tweet: '',
    },
  ])
  const [author, setAuthor] = useState({
    name: '',
    profileImage: '',
    walletAddress: '',
    isProfileImageNft: undefined,
  })

  useEffect(() => {
    if (!currentUser) return

    setTweets(currentUser.tweets)
    setAuthor({
      name: currentUser.name,
      profileImage: currentUser.profileImage,
      walletAddress: currentUser.walletAddress,
      isProfileImageNft: currentUser.isProfileImageNft,
    })
  }, [currentUser])

  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post 
          key={index}
          displayName={
            author.name === 'Unnamed'
              ? `${author.walletAddress.slice(
                  0,
                  4,
                )}...${author.walletAddress.slice(41)}`
              : author.name
          }
          userName={`${author.walletAddress.slice(
            0,
            4,
          )}...${author.walletAddress.slice(41)}`}
          text={tweet.tweet}
          avatar={author.profileImage}
          timestamp={tweet.timestamp}
          isProfileImageNft={author.isProfileImageNft}
        />
      ))}
    </div>
  )
}

export default profileTweets