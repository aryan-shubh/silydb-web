"use server";

import { redirect } from "next/navigation";

export async function queueLaunchRequest() {
  redirect("/?queued=true");
}
