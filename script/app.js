    const SUPABASE_URL = "https://qljcnaxhbfspuzxcmlcm.supabase.co";

    const SUPABASE_KEY = "sb_publishable_e-lnumIIQsK7QhiYcilSKQ_gQSlga_X";

    console.log(supabase);

    const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    async function addEmploee(event) {
          event.preventDefault(); 
    const name = document.getElementById(`employeeName`).value;
    const department = document.getElementById(`employeeDepart`).value;
    const email = document.getElementById(`employeeEmail`).value;
    const salary = document.getElementById(`employeeSalary`).value;

    const { data, error } = await supabaseClient.from("employees").insert([
        {
        name,
        email,
        salary,
        department,
        },
    ]);
    if (error) {
        console.log("error", error);
        return;
    }
    alert("Employee Added");

    // loadEmployees();
    document.getElementById("employeeForm").reset();
}
