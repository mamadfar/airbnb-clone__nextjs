import {FC} from "react";
import {ICardData} from "@/model/data.model";
import Image from "next/image";

const MediumCard: FC<ICardData> = ({img, title}) => {
    return (
        <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
            <div className="relative h-80 w-80">
                <Image src={img} alt="Card" fill className="rounded-xl"/>
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCard;
