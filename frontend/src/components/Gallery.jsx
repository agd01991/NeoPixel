export default function Gallery() {
    return (
        <div className='bg-[#1E1F21] py-[200px]'>
            <div className='text-white flex max-w-7xl mx-auto mb-[140px] border-b-4 border-white-600 p-[10px] text-2xl place-content-between'>
                <div>Gallery</div>
                <div>----</div>
            </div>
            <div className='flex gap-12 justify-around max-w-sm mx-auto text-white'>
                <img src={require('../assets/events/event1.jpg')} alt="" />
                <img src={require('../assets/events/event1.jpg')} alt="" />
                <img src={require('../assets/events/event1.jpg')} alt="" />
            </div>
        </div>
    );
};