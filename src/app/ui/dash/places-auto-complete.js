import React, {useState} from 'react';
import usePlacesAutoComplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from "react-cool-onclickoutside";

export default function PlacesAutoComplete({onAddressSelect, title}) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutoComplete({
    requestOptions: { componentRestrictions: {country: 'us'} },
    debounce: 300,
    cache: 86400,
  });

  const ref = useOnclickOutside(() => { clearSuggestions(); });

  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: {main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}
          className='text-gray-900 hover:bg-gray-100'
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div>
      <label for="place" class="block text-sm font-medium leading-6 text-gray-900">{title}</label>
      <div class="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="place"
          id="place"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search for a destination to add."
          value={value}
          onChange={(e) => setValue(e.target.value) }
        />

      {status === 'OK' && (
        <ul>{renderSuggestions()}</ul>
      )}
      </div>
    </div>
  );
};