export const fetchBenches = filters =>
  $.ajax({
    method: "GET",
    url: "api/benches",
    filters
  });

export const createBench = benchForm =>
  $.ajax({
    method: "POST",
    url: "api/benches",
    data: benchForm,
    contentType: false,
    processData: false
  });
