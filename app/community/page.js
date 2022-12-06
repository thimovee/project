import ForumCard from "./ForumCard";

export default function CommunityPage() {
    return (
        <div className="flex">
        <div className="flex flex-col w-full bg-red mt-32 pb-20">
            <div className="w-1/2 bg-green-500 h-14 ml-auto mr-60 rounded-t-md">
                <h1 className="font-semibold text-xl p-4">GENERAL</h1>
            </div>
            <ForumCard/>
            <ForumCard/>
            <ForumCard/>
            <ForumCard/>
            <ForumCard/>

            <div className="w-1/2 bg-green-500 h-14 ml-auto mr-60 mt-10 rounded-t-md">
                <h1 className="font-semibold text-xl p-4">DISCUSSIONS</h1>
            </div>
            <ForumCard/>
            <ForumCard/>
            <ForumCard/>
            <ForumCard/>
            <ForumCard/>
            <ForumCard/>

            <div className="w-1/2 bg-green-500 h-14 ml-auto mr-60 mt-10 rounded-t-md">
                <h1 className="font-semibold text-xl p-4">MARKETPLACE</h1>
            </div>
            <ForumCard/>
            <ForumCard/>
            <ForumCard/>
            <ForumCard/>
            <ForumCard/>
        </div>
        <div className="w-1/4 h-[450px]  bg-[#292929] rounded-[20px] mt-32 mr-20">

        </div>
        </div>
    )
}