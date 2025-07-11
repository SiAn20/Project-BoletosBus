import express from "express";
import userRoutes from "./routes/user.routes.js";
import travelRouter from "./routes/travel.routes.js";
import cors from "cors";
import busStationRoute from "./routes/busStation.routes.js";
import authRoutes from "./routes/auth.routes.js";
import choferRoutes from "./routes/chofer.routes.js";
import busRoutes from "./routes/bus.routes.js";
import asientoRoutes from "./routes/asiento.routes.js";
import viajeRoutes from "./routes/viaje.routes.js";
import reservaRoutes from "./routes/reserva.routes.js";
import dotenv from "dotenv";
import estadisticasRoutes from "./routes/estadisticas.routes.js";
import reporteRoutes from "./routes/reporte.routes.js";
import agencyRoutes from "./routes/agency.routes.js";
import routeRoutes from "./routes/route.routes.js";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();
app.listen(PORT || 4000);
console.log(`Server is running on port ${PORT}`);

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(busStationRoute);
app.use(authRoutes);
app.use("/travel", travelRouter);
app.use("/route", routeRoutes);
app.use("/choferes", choferRoutes);
app.use("/bus", busRoutes);
app.use("/asiento", asientoRoutes);
app.use("/viajes", viajeRoutes);
app.use("/reservas", reservaRoutes);
app.use("/estadistica", estadisticasRoutes);
app.use("/reporte", reporteRoutes);
app.use("/agency", agencyRoutes);
