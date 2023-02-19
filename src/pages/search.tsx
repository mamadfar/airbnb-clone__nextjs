import {Button, Header, InfoCard, Map} from "@/components";
import {useSearchParams} from "next/navigation";
import {DateFormatter} from "@/utils/DateFormater";
import {Capitalizer} from "@/utils/Capitalizer";
import {GetServerSidePropsContext} from "next";
import {FC} from "react";
import {ISearchResults} from "@/model/data.model";

interface ISearchProps {
    searchResults: ISearchResults[]
}

const Search: FC<ISearchProps> = ({searchResults}) => {
    const searchParams = useSearchParams();
    const location: (string | null) = searchParams.get("location");
    const startDate: (string | null) = searchParams.get("startDate");
    const endDate: (string | null) = searchParams.get("endDate");
    const noOfGuests: (string | null) = searchParams.get("noOfGuests");

    const range = `${DateFormatter(startDate)} - ${DateFormatter(endDate)}`;

    return (
        <>
            <Header placeholder={`${Capitalizer(location)} | ${range} | ${noOfGuests} guests`}/>
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays - {range} -
                        for {noOfGuests} {Number(noOfGuests) === 1 ? "guest" : "guests"}</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {Capitalizer(location)}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <Button title="Cancellation Flexibility"/>
                        <Button title="Type of Place"/>
                        <Button title="Price"/>
                        <Button title="Rooms and Beds"/>
                        <Button title="More filters"/>
                    </div>
                    <div className="flex flex-col">
                        {searchResults.map(({img, location, title, description, price, total, star}, index) => (
                            <InfoCard key={index} img={img} location={location} title={title} description={description}
                                      price={price} total={total} star={star}/>
                        ))}
                    </div>
                </section>
                <section className="hidden xl:inline-flex xl:min-w-[510px] 2xl:min-w-[650px]">
                    <Map searchResults={searchResults}/>
                </section>
            </main>
        </>
    );
};

export default Search;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res => res.json());
    return {
        props: {
            searchResults
        }
    }
}
