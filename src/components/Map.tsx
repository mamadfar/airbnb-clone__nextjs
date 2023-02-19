import {FC, useState} from "react";
import {Marker, Popup, Map as MapGL} from 'react-map-gl';
import {getCenter} from "geolib";
import {ISearchResults} from "@/model/data.model";

interface IMapProps {
    searchResults: ISearchResults[]
}

const Map: FC<IMapProps> = ({searchResults}) => {
    const [selectedLocation, setSelectedLocation] = useState<ISearchResults>();

    //? Get all long and lat into a separate array
    const coordinates = searchResults.map(({long, lat}) => ({
        longitude: long,
        latitude: lat
    }));

    //? Centralize our coordinates
    const center = getCenter(coordinates);

    return (
        <>
            <MapGL mapStyle={process.env.AIR_MAP_STYLE} mapboxAccessToken={process.env.AIR_MAP_TOKEN}
                   initialViewState={{
                       zoom: 11,
                       ...center
                   }} style={{width: "100%", height: "100%"}}>
                {searchResults.map((result, index) => (
                    <div key={index}>
                        <Marker longitude={result.long} latitude={result.lat} offset={[-10, -20]} onClick={e => {
                            e.originalEvent.stopPropagation();
                            setSelectedLocation(result);
                        }}>
                            <p aria-label="push-pin" role="img"
                               className="cursor-pointer text-2xl animate-bounce">📌</p>
                        </Marker>
                    </div>
                ))}
                {selectedLocation && (
                    <Popup closeOnClick onClose={() => setSelectedLocation(undefined)}
                           longitude={selectedLocation.long}
                           latitude={selectedLocation.lat}>{selectedLocation.title}</Popup>
                )}
            </MapGL>
        </>
    )
};

export default Map;
