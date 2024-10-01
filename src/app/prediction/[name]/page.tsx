const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    return res.json();
  };
  
  const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    return res.json();
  };
  
  const getPredictedCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    return res.json();
  };
  
  interface Params {
    params: { name: string };
  }
  
  export default async function Page({ params }: Params) {
    const ageData = getPredictedAge(params.name);
    const genderData = getPredictedGender(params.name);
    const countryData = getPredictedCountry(params.name);
  
    const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
        <div className="p-6 shadow-lg bg-white rounded-lg max-w-md w-full space-y-6">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Personal Info
          </h1>

          
          <div className="space-y-4">

          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-semibold">Name:</span>
            <span className="text-gray-900">{params.name}</span>
          </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Age:</span>
              <span className="text-gray-900">{age?.age || "N/A"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Gender:</span>
              <span className="text-gray-900">{gender?.gender || "N/A"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-semibold">Country:</span>
              <span className="text-gray-900">{country?.country[0]?.country_id || "N/A"}</span>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 mt-6">
            This data is based on predictions for the entered name.
          </div>
        </div>
      </div>
    );
  }
  