import React from 'react';

const InputForm = ({onMoodSelect, onResolutionSelect, onGenreSelect, onButtonSubmit}) => {
	return(
	<div>
     <p className = 'f3'>
     	{'Moodify will generate playlists for you based on your mood and what you want to end up feeling'}
     </p>
     	<div className = 'center'>
     		<div className ='form center pa4 br3 shadow-5'>
     			<select id="types" className="w=30 grow f4 link ph3 pv2 dib white bg-light-purple" name="Mood"
     				onChange = {onMoodSelect}>
 					 <option value=""> Select the Mood</option>
 						<option label="Sad" value="Sad">Sad
  						</option>
						 <option label="Low Energy" value="Low Energy">Low Energy
						 </option>
						 <option label="Happy" value="Happy">Happy
						 </option>
  
					</select>
     			
     			<select id="types" className="w=30 grow f4 link ph3 pv2 dib white bg-light-purple" name="Resolution"
     				onChange = {onResolutionSelect}
     			>
 					 <option value="Resolution"> I want to feel...</option>
 						<option label="Even sadder" value="Even sadder">Even Sadder
  						</option>
						 <option label="Like Dancing" value="Like Dancing">Like Dancing
						 </option>
						 <option label="Mellow" value="Mellow">Mellow
						 </option>
  
					</select>

                    <select id="types" className="w=30 grow f4 link ph3 pv2 dib white bg-light-purple" name="Genre"
                    onChange = {onGenreSelect}>
                     <option value="Genre">Choose the Genre</option>
                        <option label="Acoustic" value="acoustic">Acoustic
                        </option>
                         <option label="Afrobeat" value="afrobeat">Afrobeat
                         </option>
                         <option label="Ambient" value="ambient">Ambient
                         </option>
                         <option label="Acoustic" value="acoustic">Acoustic
                        </option>
                         <option label="Classical" value="classical">Classical
                         </option>
                         <option label="Country" value="country">Country
                         </option>
                          <option label="Dance" value="dance">Dance
                        </option>
                         <option label="Dancehall" value="dancehall">Dancehall
                         </option>
                         <option label="EDM" value="edm">EDM
                         </option>
                         <option label="Metal" value="metal">Metal
                        </option>
                         <option label="Hip-Hop" value="hip-hop">Hip-Hop
                         </option>
                         <option label="Reggae" value="reggae">Reggae
                         </option>
  
                    </select>
     			<button 
          			className = 'w=30 grow f4 link ph3 pv2 dib white bg-light-purple'
          			onClick = {onButtonSubmit}>
                        Submit
     			</button>
     		</div>
		</div>
    </div>
		);
}
export default InputForm;