import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    direction: "in two directions",
    flightClass: "economy",
    adults: 1,
    children: 0,
    infants: 0,
    inputFromIATA: null,
    inputFromLocation: null,
    inputToIATA: null,
    inputToLocation: null,
};


const dataTicketAvia: any = createSlice({
    name: 'Data for air ticket search',
    initialState,
    reducers: {
        direction: (state: any, action: PayloadAction<string>) => {
            state.direction = action.payload;
        },

        flightClass: (state: any, action: PayloadAction<string>) => {
            state.flightClass = action.payload;
        },

        adults: (state: any, action: PayloadAction<string>) => {
            if (action.payload === "plus") {
                state.adults++;
            }else if (action.payload === "minus") {
                state.adults--;
            }

            if (state.adults < 0) {
                state.adults = 0;
            }
        },

        children: (state: any, action: PayloadAction<string>) => {
            if (action.payload === "plus") {
                state.children++;
            }else if (action.payload === "minus") {
                state.children--;
            }

            if (state.children < 0) {
                state.children = 0;
            }
        },

        infants: (state: any, action: PayloadAction<string>) => {
            if (action.payload === "plus") {
                state.infants++;
            }else if (action.payload === "minus") {
                state.infants--;
            }

            if (state.infants < 0) {
                state.infants = 0;
            }
        },

        inputFromIATA: (state: any, action: PayloadAction<string>) => {
            state.inputFromIATA = action.payload;
        },

        inputFromLocation: (state: any, action: PayloadAction<string>) => {
            state.inputFromLocation = action.payload;
        },
        inputToIATA: (state: any, action: PayloadAction<string>) => {
            state.inputToIATA = action.payload;
        },

        inputToLocation: (state: any, action: PayloadAction<string>) => {
            state.inputToLocation = action.payload;
        },
    },

});


export const {direction, flightClass, adults, children, infants, inputFromIATA, inputFromLocation, inputToIATA, inputToLocation} = dataTicketAvia.actions;
export default dataTicketAvia.reducer;