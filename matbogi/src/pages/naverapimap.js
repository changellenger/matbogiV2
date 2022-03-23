import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
import Grid from "@mui/material/Grid";
/*import "./naverApiMap.scss";*/


export const naverapimap = (props) => {
    return (
        <RenderAfterNavermapsLoaded clientId={"인증키"}>
            <Grid item xs={12} md={12}>
            <NaverMap
                id={"map"}
                mapDivId={"react-naver-map"} // default name
                style={{ height: '90vh' }}
            />
            </Grid>
        </RenderAfterNavermapsLoaded>
    );
};

export default naverapimap;