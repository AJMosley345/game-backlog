import React from "react";
import Router from "next/router";
import { Button, Typography, Divider } from '@mui/material';

export type ListProps = {
    id: number;
    name: string;
    platform: string;
    series: string;
};

const GameList: React.FC<{ game: ListProps }> = ({ game }) => {
    return (
        <div className="container">
            <div >
                <div className="row">
                    <div className="col-md-9">
                        <div className="mb-3">
                                <div className="d-flex align-content-start flex-row">
                                    <div className="d-flex flex-column flex-md-row justify-content-between flex-grow-1 mb-2">
                                        <div className="mr-4">
                                        <div>
                                            <Typography>{game.name}</Typography>
                                            <Typography>
                                                {game.platform}
                                            </Typography>
                                            <Typography>
                                                {game.series}
                                            </Typography>
                                            <Button variant="contained" onClick={() => Router.push("/game/[id]", `/game/${game.id}`)}>Details</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider />
            </div>
            <style jsx>{`
                .row {
                    display: flex;
                    flex-wrap: wrap;
                    margin-right: -15px;
                    margin-left: -15px;
                }
                .col-md-9 {
                    position: relative;
                    width: 100%;
                    padding-right: 15px;
                    padding-left: 15px;
                }
                .container {
                    width: 100%;
                    padding-right: 15px;
                    padding-left: 15px;
                    margin-right: auto;
                    margin-left: auto;
                }
            `}</style>
        </div>
    );
};

export default GameList;