// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { Table, TableRow, TableCell } from "../../table";

test("Table should be instantiated", () => {
    const table = new Table();
    expect(table).toEqual(expect.anything());
});

test("TableRow should be instantiated", () => {
    const row = new TableRow();
    expect(row).toEqual(expect.anything());
});

test("TableCell should be instantiated", () => {
    const cell = new TableCell();
    expect(cell).toEqual(expect.anything());
});
