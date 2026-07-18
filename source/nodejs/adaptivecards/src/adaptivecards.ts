// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
export * from "./strings";
export * from "./enums";
export * from "./shared";
export * from "./utils";
export * from "./serialization";
export * from "./host-capabilities";
export * from "./host-config";
export * from "./registry";
export * from "./card-object";
export * from "./card-elements";
export * from "./carousel";
export * from "./table";
export * from "./channel-adapter";
export * from "./activity-request";
export * from "./adaptive-applet";

export { IAdaptiveCard, ICardElement } from "./schema";

// Ensure element type registrations survive bundler tree-shaking.
// The individual modules (table.ts, carousel.ts) register themselves at
// module scope, but aggressive tree-shaking can strip those calls when
// the consumer doesn't directly reference any of their exports.
// Re-registering here in the package entry point guarantees the types
// are always available at parse time.
import { GlobalRegistry } from "./registry";
import { Versions } from "./serialization";
import { Table } from "./table";
import { Carousel } from "./carousel";

GlobalRegistry.defaultElements.register("Table", Table, Versions.v1_5);
GlobalRegistry.defaultElements.register("Carousel", Carousel, Versions.v1_6);
