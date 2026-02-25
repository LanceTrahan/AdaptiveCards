import { AdaptiveCard } from "../card-elements";
import { Table } from "../table";

const cardJson = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.5",
    "body": [
        {
            "type": "TextBlock",
            "text": "Sample Table"
        },
        {
            "type": "Table",
            "firstRowAsHeaders": true,
            "columns": [
                { "width": 1 },
                { "width": 2 }
            ],
            "rows": [
                {
                    "type": "TableRow",
                    "cells": [
                        { "type": "TableCell", "items": [{ "type": "TextBlock", "text": "Name" }] },
                        { "type": "TableCell", "items": [{ "type": "TextBlock", "text": "Status" }] }
                    ]
                },
                {
                    "type": "TableRow",
                    "cells": [
                        { "type": "TableCell", "items": [{ "type": "TextBlock", "text": "VM-001" }] },
                        { "type": "TableCell", "items": [{ "type": "TextBlock", "text": "Healthy" }] }
                    ]
                }
            ]
        }
    ]
};

const card = new AdaptiveCard();
card.parse(cardJson);

console.log("Body item count:", card.getItemCount());

for (let i = 0; i < card.getItemCount(); i++) {
    const item = card.getItemAt(i);
    console.log(`Item ${i}: type=${item.getJsonTypeName()}`);
    
    if (item instanceof Table) {
        console.log(`  Column count: ${item.getColumnCount()}`);
        console.log(`  Row count: ${item.getItemCount()}`);
        
        for (let j = 0; j < item.getColumnCount(); j++) {
            const col = item.getColumnAt(j);
            console.log(`  Column ${j}: width=${col.width.physicalSize}`);
        }
        
        for (let j = 0; j < item.getItemCount(); j++) {
            const row = item.getItemAt(j);
            console.log(`  Row ${j}: cell count=${row.getItemCount()}`);
        }
    }
}
