import request from "supertest";
import app from "../src/server.ts";

describe("Hero API", () => {
    it("should create a hero", async () => {
        const response = await request(app).post("/api/superheroes").send({
            name: "Jam",
            superpower: "Sweetness",
            humilityScore: 10,
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
        expect(response.body.name).toBe("Jam");
    });

    it("should return heroes sorted by humilityScore", async () => {
        await request(app).post("/api/superheroes").send({
            name: "Foo",
            superpower: "Bar",
            humilityScore: 5,
        });

        const response = await request(app).get("/api/superheroes");

        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(2);
        expect(response.body[0].humilityScore).toBeLessThanOrEqual(response.body[1].humilityScore);
    });
});
