import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";

// OPTICS
const razorHD = "618ba27d9008e4636a67f61d";
const pso1 = "5c82342f2e221644f31c060e";
const pso1M2 = "5c82343a2e221644f31c0611";
const pso1M21 = "576fd4ec2459777f0b518431"
const tac30 = "5b2388675acfc4771e1be0be";
const vudu = "5b3b99475acfc432ff4dcbee";
const hensoldtFF4 = "56ea70acd2720b844b8b4594";
const kmz1P59 = "5d0a3a58d7ad1a669c15ca14";
const kmz1P69 = "5d0a3e8cd7ad1a6f6a3d35bd";
const leupoldM4LR = "5a37cb10c4a282329a73b4e7";
const marchTactical = "57c5ac0824597754771e88a9";
const adoP4Sniper = "5dfe6104585a0c3e995c7b82";
const atacr = "5aa66be6e5b5b0214e506e97";
const nxs = "544a3d0a4bdc2d1b388b4567";
const npz1P78 = "618a75f0bd321d49084cd399";
const ups1tyulpan = "5cf638cbd7f00c06595bc936";
const pag17 = "5d53f4b7a4b936793d58c780";
const pu3_5 = "5b3f7c1c5acfc40dc5296b1d";
const pmII1_8 = "617151c1d92c473c770214ab";
const pmII3_20 = "61714eec290d254f5e6b2ffc";
const pmII5_25 = "62850c28da09541f43158cca";
const tango6T = "6567e7681265c8a131069b0f";
const pilad = "5dff772da3651922b360bf91";
const specterDR = "57ac965c24597706be5f975c";
const specterDRFDE = "57aca93d2459771f2c7e26db";

class Mod implements IPostDBLoadMod
{    
    public postDBLoad(container: DependencyContainer): void
    {
        // const logger = container.resolve<ILogger>("WinstonLogger");

        // get database from the server
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const tables: IDatabaseTables = databaseServer.getTables();

        // Add zero ranges
        [
            razorHD, pso1, pso1M2, pso1M21, tac30, vudu, hensoldtFF4, kmz1P59, kmz1P69, leupoldM4LR, marchTactical,
            adoP4Sniper, atacr, nxs, npz1P78, ups1tyulpan, pag17, pu3_5, pmII1_8, pmII3_20, pmII5_25, tango6T, pilad,
            specterDR, specterDRFDE
        ].forEach(function (item) {
            tables.templates.items[item]._props.CalibrationDistances[0] =
                [50, 100, 150, 200, 250, 300, 333, 366, 400, 425, 450, 475, 500, 525, 550, 575, 600, 620, 640, 660, 680, 700];

            // [50, 100, 150, 200, 250, 300, 333, 366, 400, 425, 450, 475, 500, 525, 550].forEach(function (zoom) {
            //     tables.templates.items[item]._props.CalibrationDistances[0].push(zoom);
            // });
        });
    }
}

export const mod = new Mod();

