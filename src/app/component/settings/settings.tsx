export default function Settings() {
    return (
      <div className="text-[#433E3F] p-4 md:p-8">
        {/* Identity Verification Section */}
        <div>
          <h3 className="font-semibold text-lg ">Identity Verification</h3>
          <div className="bg-[#F1F6F9] py-4 px-5 rounded-lg mt-2">
            <div className="text-sm font-semibold border-b border-b-[#E3E3E3] py-3">
              Voter verification status
            </div>
  
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 text-sm space-y-4 md:space-y-0">
              <div>
                <h3 className="text-[#B5B3B3] ">Not verified</h3>
                <p className="mt-1">
                  Get started and complete your voter&apos;s verification
                </p>
              </div>
              <div className="bg-basecolour text-white py-2 px-5 font-semibold rounded-lg cursor-pointer">
                Proceed
              </div>
            </div>
          </div>
        </div>
  
        {/* Privacy and Security Section */}
        <div className="mt-10">
          <h3 className="font-semibold text-lg ">Privacy and Security</h3>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#F1F6F9] py-6 px-5 rounded-lg mt-4 text-sm space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold text-base">Two-factor authentication</h3>
              <p className="mt-1">
                This is critical for securing your privacy. We highly recommend turning on 2FA.
              </p>
            </div>
            <div className="bg-basecolour text-white py-2 px-5 font-semibold rounded-lg cursor-pointer">
              Enable
            </div>
          </div>
        </div>
  
        {/* Notifications Section */}
        <div className="mt-10">
          <h3 className="font-semibold text-lg ">Notifications</h3>
  
          <div className="text-sm bg-[#F1F6F9] py-6 px-5 rounded-lg space-y-6 mt-4">
            {/* Push Notification */}
            <div className="flex justify-between items-center border-b border-b-[#E3E3E3] pb-3">
              <div>
                <h3 className="font-semibold text-base">Push Notification</h3>
                <p className="mt-2">Stay up to date with updates from the app</p>
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="relative w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-basecolour">
                    <span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform transform peer-checked:translate-x-4"></span>
                  </div>
                </label>
              </div>
            </div>
  
            {/* Email Notification */}
            <div className="flex justify-between items-center border-b border-b-[#E3E3E3] pb-3">
              <div>
                <h3 className="font-semibold text-base">Email Notification</h3>
                <p className="mt-2">Get email notifications</p>
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="relative w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-basecolour">
                    <span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform transform peer-checked:translate-x-4"></span>
                  </div>
                </label>
              </div>
            </div>
  
            {/* In-App Notifications */}
            <div className="flex justify-between items-center border-b border-b-[#E3E3E3] pb-3">
              <div>
                <h3 className="font-semibold text-base">In-App Notifications</h3>
                <p className="mt-2">System notifications, system updates</p>
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="relative w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-basecolour">
                    <span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform transform peer-checked:translate-x-4"></span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  