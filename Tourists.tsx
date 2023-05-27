import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hero } from "./Pages/Hero";
import { GlobalStyle } from "./StyledComponents/GlobalStyle";
import { Header } from "./Pages/Header";

export const Tourists = ()=>{
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Hero/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}