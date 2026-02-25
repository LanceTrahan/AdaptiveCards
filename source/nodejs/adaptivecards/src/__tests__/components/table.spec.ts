// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { Table, TableRow, TableCell } from "../../table";
import { GlobalRegistry } from "../../registry";

test("Table should be instantiated", () => {
    const table = new Table();
    expect(table).toBeInstanceOf(Table);
});

test("TableRow should be instantiated", () => {
    const row = new TableRow();
    expect(row).toBeInstanceOf(TableRow);
});

test("TableCell should be instantiated", () => {
    const cell = new TableCell();
    expect(cell).toBeInstanceOf(TableCell);
});

test("Table type should be registered in GlobalRegistry", () => {
    const registration = GlobalRegistry.defaultElements.findByName("Table");
    expect(registration).toBeDefined();
    expect(registration!.typeName).toBe("Table");
});
