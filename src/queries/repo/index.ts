import { useQuery } from "@tanstack/react-query";
import api from "../../services/api";
import { Repo } from "../types";

async function getRepos() {
  const { data } = await api.get<Repo[]>(`/users/BmAlkes/repos`);

  return data;
}

export default function useFetchRespo() {
  return useQuery(["repos"], getRepos);
}
