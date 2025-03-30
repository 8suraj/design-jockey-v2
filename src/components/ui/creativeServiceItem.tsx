interface CreativeServiceItemProp {
	service: string;
}

export default function CreativeServiceItem(props: CreativeServiceItemProp) {
	return (
		<div
			className=' bg-black3 rounded-lg  text-[.75rem]  text-wrap	
							 w-full  sm:w-[30%]  lg:w-[24%] xl:w-[19%]  
							   md:text-center sm:p-6 md:py-6 2xl:py-6
							   sm:text-left text-center py-6 capitalize hover:bg-[#373636]		'
		>
			{props.service}
		</div>
	);
}
