import React from "react";
import ContentToolbar from "./ContentToolbar";

function ContentArea() {
  return (
    <section className="mt-8 w-full max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <label className="text-sm leading-none text-white">Content</label>
          <div className="pt-2.5 mt-1.5 w-full bg-gray-900 rounded-xl border-solid border-[1.5px] border-[color:var(--Grey-900,#1D2939)] max-md:max-w-full">
            <div className="w-full text-sm font-light text-gray-100 max-md:max-w-full">
              <div className="flex-1 shrink gap-2.5 self-stretch px-4 w-full basis-0 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                amet. Pellentesque commodo lacus at sodales sodales. <br />
                <br />
                Quisque sagittis orci ut diam condimentum, vel euismod erat
                placerat. In iaculis arcu eros, eget tempus orci facilisis
                id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.{" "}
                <br />
                <br />
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                amet. Pellentesque commodo lacus at sodales sodales. Quisque
                sagittis orci ut diam condimentum, vel euismod erat placerat. In
                iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                Aliquam in hendrerit urna. Pellentesque sit amet sapien
                fringilla, mattis ligula co
              </div>
            </div>
            <ContentToolbar />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentArea; 