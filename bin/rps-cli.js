#!/usr/bin/env node
import { rps } from "../lib/rpsls.js";

const args = process.argv.slice(2);
rps(args);
