import SearchIcon from './icons/SearchIcon'

interface Props {
    getUser: (username: string) => Promise<void>
}

const FormSearchUser = ({ getUser }: Props) => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const username = e.currentTarget.username.value;
        if (!username) return;
        await getUser(username);
    };


    return (

        <form
            onSubmit={handleSubmit}
            className="flex flex-wrap gap-2 items-center dark:bg-blue-800 bg-blue-100 shadow-md shadow-blue-0 dark:shadow-none p-4 rounded-xl mb-6 ">
            <span className="min-w-[20px]">
                <SearchIcon className="dark:fill-white fill-blue-950"
                    width={30} />
            </span>
            <input
                name="username"
                type="text"
                placeholder='Buscar usuario Github...'
                className=" flex-1 h-auto p-2 rounded-lg bg-transparent text-white dark:placeholder:text-white focus:outline-none focus:ring-2 ring-blue-400"
            />
            <button className="dark:bg-blue-500 bg-blue-950 rounded-lg py-2 px-4 text-white font-bold ml-auto">Buscar</button>
        </form>
    )
}

export default FormSearchUser

