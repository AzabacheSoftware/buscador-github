import * as React from "react"
import GithubIcon from '@/components/icons/GithubIcon'
import LocationIcon from '@/components/icons/LocationIcon'
import LinkIcon from "./icons/LinkIcon"
import TwitterIcon from "./icons/TwitterIcon"
import BuldingIcon from "./icons/buldingIcon"
import Image from "next/image"
import { User } from "@/interfaces/user"


interface Props {
    user: User;
}


function valideURL(url: string): string {
    if (!/^(https?:\/\/)/i.test(url)) {
      url = "https://" + url;
    }
    return url;
  }
const UserCardInfo = ({ user }: Props) => {
    return (
        <article className="grid-areas dark:bg-blue-800 bg-blue-100 p-4 rounded-xl mb-6 dark:text-white text-blue-900">
            <div className="overflow-hidden section-logo bg-gray-200 grid h-24 w-24 place-content-center rounded-full p-1 mr-3 lg:mx-auto">
                <Image src={user.avatar_url}
                 width={96} 
                 height={96}
                 alt={`profile img user ${user.name}`}
                 className="rounded-full border-2 border-blue-950 "
                 />
                {/*<GithubIcon className='relative top-2 h-full w-full' />*/}
            </div>
            <div className="section-titletext-center ">
                <h2 className='font-bold text-2xl text-center'>{user.name}</h2>
                <p className="text-red-400 text-center ">{user.login}</p>
                <p className="section-date tracking-tighter text-sm text-center mt-2">{
                    new Date(user.created_at || '').toLocaleDateString('es-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }
                    )
                }</p>
            </div>

            <p className='section-description mt-6 leading-loose text-center'>
                {user?.bio || 'Usuario no encontrado'}
            </p>
            <div className='section-number flex justify-around dark:bg-blue-950 bg-blue-300 rounded-xl p-8 mt-4 text-center'>
                <article>
                    <p>Repos</p>
                    <p className='font-bold text-2xl'>{user.public_repos}</p>
                </article>
                <article>
                    <p>Followers</p>
                    <p className='font-bold text-2xl'>{user.followers}</p>
                </article>
                <article>
                    <p>Following</p>
                    <p className='font-bold text-2xl'>{user.following}</p>
                </article>
            </div>
            <div className='section-social md:grid md:grid-cols-1 mt-4 space-y-3'>
                <article className="flex space-x-2 ">
                    <i>
                        <LocationIcon className="dark:fill-white fill-blue-300 h-5 w-5"
                            width={"1rem"}
                        />
                    </i>
                    <span>{user?.location || 'Sin información'}</span>
                </article>
                <article className="flex space-x-2">
                    <i>
                        <LinkIcon className="dark:fill-white fill-blue-300 h-full w-full"
                            width={"1rem"} />
                    </i>
                    <a href={valideURL(user?.blog)} className="truncate">{user?.blog || 'Sin información'}</a>
                </article >
                <article className="flex space-x-2">
                    <i>
                        <TwitterIcon className="dark:fill-white fill-blue-300 h-full w-full"
                            width={"1rem"} />
                    </i>
                    <a href={`https://www.twitter.com/${user?.twitter_username}`}>
                        {user?.twitter_username || 'Sin información'}
                    </a>

                </article>
                <article className="flex space-x-2">
                    <i>
                        <BuldingIcon className="dark:fill-white fill-blue-300 h-full w-full"
                            width={"1rem"} />
                    </i>
                    <span>
                        {user?.company || 'Sin información'}
                    </span>
                </article >
            </div>

        </article>
    )
}

export default UserCardInfo
