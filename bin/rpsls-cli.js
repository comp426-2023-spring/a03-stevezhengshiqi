#!/usr/bin/env node
import { rpsls } from "../lib/rpsls.js";

const args = process.argv.slice(2);
rpsls(args);
