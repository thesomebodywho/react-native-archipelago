import { deg2rad, getDistanceFromLatLonInKm } from "../getLocations";

test("Distance between 20, 20 and 21, 21 is 152.35411114794897km.", () => {
  expect(getDistanceFromLatLonInKm(20, 20, 21, 21)).toBeCloseTo(152.35);
});

test("Distance between 26.5664, 24.7777 and 21.420, 21.696969 is 652.1583733905148km.", () => {
  expect(
    getDistanceFromLatLonInKm(26.5664, 24.7777, 21.42, 21.696969),
  ).toBeCloseTo(652.15);
});

test("180 degrees is pi radians", () => {
  expect(deg2rad(180)).toBeCloseTo(Math.PI);
});

test("57.3 degrees is 1 radian", () => {
  expect(deg2rad(57.3)).toBeCloseTo(1.0);
});

//TODO: Mock fetch somehow.
// When I'm in a "Create the most untestable codebase" competition and my opponent is aki665.
