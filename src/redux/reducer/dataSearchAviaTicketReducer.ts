import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    direction: "oneway",
    flightClass: "M",
    adults: 1,
    children: 0,
    infants: 0,
    inputFromIATA: null,
    inputFromLocation: null,
    inputToIATA: null,
    inputToLocation: null,
    calendarStart: null,
    calendarFinish: null,
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
            } else if (action.payload === "minus") {
                state.adults--;
            }

            if (state.adults < 0) {
                state.adults = 0;
            }
        },

        children: (state: any, action: PayloadAction<string>) => {
            if (action.payload === "plus") {
                state.children++;
            } else if (action.payload === "minus") {
                state.children--;
            }

            if (state.children < 0) {
                state.children = 0;
            }
        },

        infants: (state: any, action: PayloadAction<string>) => {
            if (action.payload === "plus") {
                state.infants++;
            } else if (action.payload === "minus") {
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
        calendarStart: (state: any, action: PayloadAction<string>) => {
            state.calendarStart = action.payload;
        },

        calendarFinish: (state: any, action: PayloadAction<string>) => {
            state.calendarFinish = action.payload;
        },
        reverse: (state: any) => {
            const temporaryObject = {
                newInputFromIATA: state.inputToIATA,
                newInputFromLocation: state.inputToLocation,
                newInputToIATA: state.inputFromIATA,
                newInputToLocation: state.inputFromLocation,
            };

            state.inputFromIATA = temporaryObject.newInputFromIATA;
            state.inputFromLocation = temporaryObject.newInputFromLocation;
            state.inputToIATA = temporaryObject.newInputToIATA;
            state.inputToLocation = temporaryObject.newInputToLocation;
        },
    },

});


export const { direction, flightClass, adults, children, infants, inputFromIATA, inputFromLocation, inputToIATA, inputToLocation, calendarStart, calendarFinish, reverse } = dataTicketAvia.actions;
export default dataTicketAvia.reducer;