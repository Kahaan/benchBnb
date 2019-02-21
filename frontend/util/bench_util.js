export const fetchBenches = filters =>
  $.ajax({
    method: "GET",
    url: "api/benches",
    filters
  });
