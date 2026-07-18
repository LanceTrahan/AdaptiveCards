// Test that verifies Table parsing works end-to-end
import { Table, TableRow } from "../../table";
import { AdaptiveCard, SerializationContext } from "../../card-elements";
import { GlobalRegistry } from "../../registry";

const cardJson = {
    "type": "AdaptiveCard",
    "version": "1.5",
    "body": [
        {
            "type": "TextBlock",
            "text": "Sample Table",
            "weight": "Bolder"
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
                        {
                            "type": "TableCell",
                            "items": [{ "type": "TextBlock", "text": "Name" }]
                        },
                        {
                            "type": "TableCell",
                            "items": [{ "type": "TextBlock", "text": "Status" }]
                        }
                    ]
                },
                {
                    "type": "TableRow",
                    "cells": [
                        {
                            "type": "TableCell",
                            "items": [{ "type": "TextBlock", "text": "VM-001" }]
                        },
                        {
                            "type": "TableCell",
                            "items": [{ "type": "TextBlock", "text": "Healthy" }]
                        }
                    ]
                }
            ]
        }
    ]
};

test("Table is in GlobalRegistry.defaultElements", () => {
    const reg = GlobalRegistry.defaultElements.findByName("Table");
    expect(reg).toBeDefined();
    expect(reg!.typeName).toBe("Table");
});

test("Table is in GlobalRegistry.elements (lazy copy used during parsing)", () => {
    // Reset to force fresh copy
    GlobalRegistry.reset();
    const reg = GlobalRegistry.elements.findByName("Table");
    expect(reg).toBeDefined();
    expect(reg!.typeName).toBe("Table");
});

test("Parsing adaptive card JSON with Table produces Table element in body", () => {
    const card = new AdaptiveCard();
    card.parse(cardJson);
    
    // AdaptiveCard body should have 2 elements: TextBlock and Table
    const itemCount = card.getItemCount();
    expect(itemCount).toBe(2);
    
    // The second element should be a Table
    const tableElement = card.getItemAt(1);
    expect(tableElement).toBeInstanceOf(Table);
    
    const table = tableElement as Table;
    expect(table.getColumnCount()).toBe(2);
    expect(table.getItemCount()).toBe(2);
    
    // Check rows
    const row0 = table.getItemAt(0);
    expect(row0).toBeInstanceOf(TableRow);
    expect(row0.getItemCount()).toBe(2);
    
    const row1 = table.getItemAt(1);
    expect(row1).toBeInstanceOf(TableRow);
    expect(row1.getItemCount()).toBe(2);
});

test("SerializationContext.elementRegistry includes Table", () => {
    const context = new SerializationContext();
    const tableReg = context.elementRegistry.findByName("Table");
    expect(tableReg).toBeDefined();
    expect(tableReg!.typeName).toBe("Table");
});
